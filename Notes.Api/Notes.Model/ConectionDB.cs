using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace Notes.Models
{
    public class ConectionDB
    {
        private readonly IConfiguration _configuration;

        public ConectionDB(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string GenConectionStr()
        {
            string valReturn = "";
            dynamic dtaCfg = _configuration.GetSection("Connection");

            valReturn = "Data Source=" + dtaCfg["Server"];
            valReturn += ";Initial Catalog=" + dtaCfg["DataBase"];
            valReturn += ";Persist Security Info = True";
            valReturn += ";User ID=" + dtaCfg["User"];
            valReturn += ";Password=" + dtaCfg["Password"];

            return valReturn;
        }
    }
}
