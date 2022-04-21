import { urlCovid } from "../api/config.js";
import { api } from "../api/covid19.js";

export const mostrarpaises = async () => {
  const result = await  api(urlCovid);
console.log(result);
  let paises = result.Countries;
 
  const table = document.querySelector("#table");
  let cadena = `<table>
     <tr>
     <th>pais</th>
     
     <th>Casos nuevos</th>
     <th>Confirmados</th>
     <th>Fallesidos</th>
     </tr>
     </table>`;
  paises.map((pais) => {
    cadena += `<tr>
         <td>${pais.Country}</td>
         <td>${pais.NewConfirmed}</td>
         <td>${pais.TotalConfirmed}</td>
         <td>${pais.TotalDeaths}</td>
         </tr>`;
  });
  table.innerHTML = cadena; 
};

/*  export const mostrarSelect = async () => {
    const result = await api(urlCovid);
  
    let paises = result.Countries;

    

   
  }; */
