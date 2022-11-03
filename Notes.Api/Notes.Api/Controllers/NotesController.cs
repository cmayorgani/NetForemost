using Microsoft.AspNetCore.Mvc;
using Notes.Infraestructure.Interfaces;
using System.Text.Json;
using Mdl = Data.Model;

namespace Notes.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly INotesService _notesService;

        public NotesController(IConfiguration configuration, INotesService notesservice)
        {
            _configuration = configuration;
            _notesService = notesservice;
        }

        [HttpGet]
        public async Task<IActionResult> Notes([FromHeader] string KeyAPI)
        {
            try
            {
                if (!string.IsNullOrEmpty(KeyAPI) && KeyAPI == _configuration.GetValue<string>("Key"))
                {
                    var response = await _notesService.GetNotesAsync();
                    return Ok(response);
                }
                else
                {
                    return BadRequest("Invalid Key API");
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }
        }

        [HttpDelete]
        [Route("{NoteId}")]
        public async Task<IActionResult> Remove([FromHeader] string KeyAPI, [FromRoute] long NoteId)
        {
            try
            {
                if (!string.IsNullOrEmpty(KeyAPI) && KeyAPI == _configuration.GetValue<string>("Key"))
                {
                    var response = await _notesService.DelNoteAsync(NoteId);
                    return Ok(response);
                }
                else
                {
                    return BadRequest("Invalid Key API");
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromHeader] string KeyAPI, [FromBody] string RequestData)
        {
            try
            {
                Mdl.Notes request = JsonSerializer.Deserialize<Mdl.Notes>(RequestData);

                if (!string.IsNullOrEmpty(KeyAPI) && KeyAPI == _configuration.GetValue<string>("Key"))
                {
                    var response = await _notesService.AddNoteAsync(request);
                    return Ok(response);
                }
                else
                {
                    return BadRequest("Invalid Key API");
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }
        }


        [HttpPut]
        [Route("{NoteId}")]
        public async Task<IActionResult> Update([FromHeader] string KeyAPI, [FromBody] string RequestData, [FromRoute] long NoteId)
        {
            try
            {
                Mdl.Notes request = JsonSerializer.Deserialize<Mdl.Notes>(RequestData);

                if (!string.IsNullOrEmpty(KeyAPI) && KeyAPI == _configuration.GetValue<string>("Key"))
                {
                    var response = await _notesService.ModNotesAsync(NoteId, request);
                    return Ok(response);
                }
                else
                {
                    return BadRequest("Invalid Key API");
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }
        }
    }
}
