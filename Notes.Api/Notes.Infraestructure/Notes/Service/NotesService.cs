using Notes.Infraestructure.Globals.DTO;
using Notes.Infraestructure.Interfaces;
using Notes.Model;
using Notes.Model.Model;
using System.Runtime.ConstrainedExecution;
using System.Text.Json;

namespace Notes.Infraestructure.Notes.Service
{
    public class NotesService : INotesService
    {
        public NotesService()
        {
        }

        public async Task<DataApisDto> AddNoteAsync(string noteDta)
        {
            DataApisDto retDataAPI = new();

            try
            {
                using (notesCntx curCnx = new())
                {
                    NotNotes CurNote = JsonSerializer.Deserialize<NotNotes>(noteDta);

                    NotNotes NewNote = new();

                    NewNote.NotTitle = CurNote.NotTitle;
                    NewNote.NotBody = CurNote.NotBody;

                    curCnx.NotNotes.Add(NewNote);
                    curCnx.SaveChanges();

                    CurNote = curCnx.NotNotes.OrderBy(x => x.NotId).Last();

                    retDataAPI.Notes = JsonSerializer.Serialize(CurNote);
                    retDataAPI.Message = "OK";
                    retDataAPI.IsOk = true;
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

        public async Task<DataApisDto> DelNoteAsync(long noteId)
        {
            DataApisDto retDataAPI = new();

            try
            {
                using (notesCntx curCnx = new())
                {
                    if (curCnx.NotNotes.Where(x => x.NotId == noteId).Count() == 1)
                    {
                        NotNotes CurNote = curCnx.NotNotes.Where(x => x.NotId == noteId).First();

                        retDataAPI.Notes = JsonSerializer.Serialize(CurNote);

                        curCnx.NotNotes.Remove(CurNote);
                        curCnx.SaveChanges();

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
                using (notesCntx curCnx = new())
                {
                    retDataAPI.Notes = JsonSerializer.Serialize(curCnx.NotNotes.ToList());
                }
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

        public async Task<DataApisDto> ModNotesAsync(long noteId, string noteDta)
        {
            DataApisDto retDataAPI = new();

            try
            {
                using (notesCntx curCnx = new notesCntx())
                {
                    if (curCnx.NotNotes.Where(x => x.NotId == noteId).Count() == 1)
                    {
                        NotNotes CurNote = JsonSerializer.Deserialize<NotNotes>(noteDta);

                        NotNotes ModNote = curCnx.NotNotes.Where(x => x.NotId == noteId).First();

                        ModNote.NotTitle = CurNote.NotTitle;
                        ModNote.NotBody = CurNote.NotBody;
                        ModNote.NotFechamod = DateTime.Now;

                        curCnx.NotNotes.Update(ModNote);
                        curCnx.SaveChanges();

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
