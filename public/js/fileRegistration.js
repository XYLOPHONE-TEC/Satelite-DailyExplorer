//@ts-ignore
import json1 from "../../src/assets/jsonData/json1.json" with {type:'json'}
import json2 from "../../src/assets/jsonData/json2.json" with {type:'json'}
import json3 from "../../src/assets/jsonData/json3.json" with {type:'json'}



export const JsonObjectImported=[json1,json2,json3]
export const filesAvailable=[]
export let QueriedFileInMotion=[]

async function ScrapingName(){
    JsonObjectImported.forEach((file)=>(
        file.forEach((fileName)=>(
           fileName.name?filesAvailable.push(fileName.name):console.error(`\nError : Failed to find name property in import Json file registed at  index ${file.name==undefined?JsonObjectImported.indexOf(file):''} in JsonObjectImported array\n `)
        ))
    ))
    // console.log(fileAvailable)
}

ScrapingName()
export async function fileAlocation(fileSelected) {
    const foundFile=fileAvailable.find(item=>item===fileSelected)
   
    const fileFoundToQuery=JsonObjectImported.forEach((file)=>(
        file.find(function(fileFound){
            if(fileFound.name==foundFile){
                if(QueriedFileInMotion.length>0){
                    async function ChangeQueryTarget(){
                        delete QueriedFileInMotion[0]
                        QueriedFileInMotion.push(fileFound)
                        // console.log(QueriedFileInMotion)
                    } 
                    ChangeQueryTarget()
                }
                else {
                    QueriedFileInMotion.push(fileFound)
                    // console.log(QueriedFileInMotion)
                }
            }
    })
        ))
   
}
//for bebuging issues, uncomment the log statements above to make your work easier 