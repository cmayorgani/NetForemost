namespace Notes.Infraestructure.Globals.DTO
{
    public class DataApisDto
    {
        public DataApisDto()
        {
            Message = "";
            Notes = "";
            IsOk = false;
        }

        public string Message { get; set; }
        public string Notes { get; set; }
        public bool IsOk { get; set; }

    }
}
