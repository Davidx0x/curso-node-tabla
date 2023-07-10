const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, hasta, listar) =>{
    if (listar){
        try{
            console.log('=============='.green);
            console.log('Tabla del'.green, colors.blue( base ));
            console.log('=============='.green);

            let salida = '';
            let consola ='';

            for (let i = 1; i <=hasta; i++) {
                salida += `${base} X ${i} = ${base * i}\n`;
                consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
            }
        
                console.log(salida);
                fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
                return `Tabla del ${base}.txt`; 
        }
        catch(err){
            throw err;
        }
    }else{
        return `Tabla del ${base}.txt`;   
      } 
} 

/*getCorfirmacion = async(base) => {
    try{
        const archivo = await crearArchivo(base);

        return archivo;
    }
    catch(error){
        throw error;
    }
}
*/
module.exports = {
    crearArchivo
}