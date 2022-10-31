using Notes.Infraestructure.Globals.DTO;

namespace Notes.Infraestructure.Interfaces
{
    public interface INotesService
    {
        Task<DataApisDto> GetNotesAsync();
        Task<DataApisDto> DelNoteAsync(long noteId);
        Task<DataApisDto> AddNoteAsync(string noteDta);
        Task<DataApisDto> ModNotesAsync(long noteId, string noteDta);
    }
}
