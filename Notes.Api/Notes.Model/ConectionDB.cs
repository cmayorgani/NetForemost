using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notes.Model
{
    public static class ConectionDB
    {
        public static string GenConectionStr()
        {
            //string valReturn = "\"Data Source=198.38.83.200;Initial Catalog=siasani_notes;Persist Security Info=True;User ID=siasani_notes;Password=Facilito**123\"";
            string valReturn = "";
            using (StreamReader cfgConnection = File.OpenText(@"cnxConfig.json"))
            {
                dynamic dtaCfg = JsonConvert.DeserializeObject(cfgConnection.ReadToEnd());
                
                valReturn = "Data Source=" + dtaCfg["Server"];
                valReturn += ";Initial Catalog=" + dtaCfg["DataBase"];
                valReturn += ";Persist Security Info = True";
                valReturn += ";User ID=" + dtaCfg["User"];
                valReturn += ";Password=" + dtaCfg["Password"];
            }



            return valReturn;
        }
    }
}
