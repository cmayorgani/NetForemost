using Notes.Infraestructure.Globals.DTO;
using Mdl = Data.Model;

namespace Notes.Infraestructure.Interfaces
{
    public interface INotesService
    {
        Task<DataApisDto> GetNotesAsync();
        Task<DataApisDto> DelNoteAsync(long noteId);
        Task<DataApisDto> AddNoteAsync(Mdl.Notes noteDta);
        Task<DataApisDto> ModNotesAsync(long noteId, Mdl.Notes noteDta);
    }
}
