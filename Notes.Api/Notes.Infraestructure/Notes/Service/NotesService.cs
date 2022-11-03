using Data.Contex;
using Notes.Infraestructure.Globals.DTO;
using Notes.Infraestructure.Interfaces;
using System.Text.Json;
using Mdl = Data.Model;

namespace Notes.Infraestructure.Notes.Service
{
    public class NotesService : INotesService
    {
        private readonly notesCntx _notesContex;
        public NotesService(notesCntx notesContex)
        {
            _notesContex = notesContex;
        }

        public async Task<DataApisDto> AddNoteAsync(Mdl.Notes noteDta)
        {
            DataApisDto retDataAPI = new();

            try
            {
                Mdl.Notes NewNote = new();

                NewNote.Title = noteDta.Title;
                NewNote.Body = noteDta.Body;

                _notesContex.Notes.Add(NewNote);
                _notesContex.SaveChanges();

                noteDta = _notesContex.Notes.OrderBy(x => x.Id).Last();

                retDataAPI.Notes = JsonSerializer.Serialize(noteDta);
                retDataAPI.Message = "OK";
                retDataAPI.IsOk = true;
            }
            catch (Exception exErr)
            {
                retDataAPI.IsOk = false;
                retDataAPI.Message = exErr.Message;

                if (exErr.InnerException != null && exErr.InnerException.Message != "")
                {
                    retDataAPI.Message += "\n\n";
                    retDataAPI.Message += exErr.InnerException.Message;
                }
            }


            return retDataAPI;

        }

        public async Task<DataApisDto> DelNoteAsync(long noteId)
        {
            DataApisDto retDataAPI = new();

            try
            {
                if (_notesContex.Notes.Where(x => x.Id == noteId).Count() == 1)
                {
                    Mdl.Notes CurNote = _notesContex.Notes.Where(x => x.Id == noteId).First();

                    retDataAPI.Notes = JsonSerializer.Serialize(CurNote);

                    _notesContex.Notes.Remove(CurNote);
                    _notesContex.SaveChanges();

                    retDataAPI.Message = "OK";
                    retDataAPI.IsOk = true;
                }
                else
                {
                    retDataAPI.Notes = "";
                    retDataAPI.Message = "Note " + noteId.ToString() + " not exist";
                    retDataAPI.IsOk = false;
                }
            }
            catch (Exception exErr)
            {
                retDataAPI.IsOk = false;
                retDataAPI.Message = exErr.Message;

                if (exErr.InnerException != null && exErr.InnerException.Message != "")
                {
                    retDataAPI.Message += "\n\n";
                    retDataAPI.Message += exErr.InnerException.Message;
                }
            }


            return retDataAPI;
        }

        public async Task<DataApisDto> GetNotesAsync()
        {
            DataApisDto retDataAPI = new();

            try
            {
                retDataAPI.Notes = JsonSerializer.Serialize(_notesContex.Notes.ToList());

                retDataAPI.Message = "OK";
                retDataAPI.IsOk = true;
            }
            catch (Exception exErr)
            {
                retDataAPI.IsOk = false;
                retDataAPI.Message = exErr.Message;

                if (exErr.InnerException != null && exErr.InnerException.Message != "")
                {
                    retDataAPI.Message += "\n\n";
                    retDataAPI.Message += exErr.InnerException.Message;
                }
            }


            return retDataAPI;
        }

        public async Task<DataApisDto> ModNotesAsync(long noteId, Mdl.Notes noteDta)
        {
            DataApisDto retDataAPI = new();

            try
            {
                if (_notesContex.Notes.Where(x => x.Id == noteId).Count() == 1)
                {
                    Mdl.Notes ModNote = _notesContex.Notes.Where(x => x.Id == noteId).First();

                    ModNote.Title = noteDta.Title;
                    ModNote.Body = noteDta.Body;
                    ModNote.Modified = DateTime.Now;

                    _notesContex.Notes.Update(ModNote);
                    _notesContex.SaveChanges();

                    retDataAPI.Notes = JsonSerializer.Serialize(ModNote);
                    retDataAPI.Message = "OK";
                    retDataAPI.IsOk = true;
                }
                else
                {
                    retDataAPI.Notes = "";
                    retDataAPI.Message = "Note " + noteId.ToString() + " not exist";
                    retDataAPI.IsOk = false;
                }
            }
            catch (Exception exErr)
            {
                retDataAPI.IsOk = false;
                retDataAPI.Message = exErr.Message;

                if (exErr.InnerException != null && exErr.InnerException.Message != "")
                {
                    retDataAPI.Message += "\n\n";
                    retDataAPI.Message += exErr.InnerException.Message;
                }
            }

            return retDataAPI;

        }
    }
}
