using Microsoft.AspNetCore.Mvc;
using Notes.Infraestructure;
using Notes.Infraestructure.Interfaces;
using Notes.Infraestructure.Notes.Service;

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
        public async Task<IActionResult> Notes([FromQuery] string KeyAPI)
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
        public async Task<IActionResult> Remove([FromQuery] string KeyAPI, [FromRoute] long NoteId)
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
        public async Task<IActionResult> Create([FromQuery] string KeyAPI, [FromHeader] string DataNote)
        {
            try
            {
                if (!string.IsNullOrEmpty(KeyAPI) && KeyAPI == _configuration.GetValue<string>("Key"))
                {
                    var response = await _notesService.AddNoteAsync(DataNote);
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
        public async Task<IActionResult> Update([FromQuery] string KeyAPI, [FromRoute] long NoteId, [FromHeader] string DataNote)
        {
            try
            {
                if (!string.IsNullOrEmpty(KeyAPI) && KeyAPI == _configuration.GetValue<string>("Key"))
                {
                    var response = await _notesService.ModNotesAsync(NoteId, DataNote);
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
