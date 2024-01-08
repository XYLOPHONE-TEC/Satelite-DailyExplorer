//@ts-ignore
//importing json files from assests/jsonData. These hold the documentions
import json1 from "../../src/assets/jsonData/json1.json" with {type:'json'}
import json2 from "../../src/assets/jsonData/json2.json" with {type:'json'}
import json3 from "../../src/assets/jsonData/json3.json" with {type:'json'}


//Registering the json files inorder to be seen in as arrays.These have a name property that is scraped and sent to the front end.
//Note: Each documentation file (JSON) has to registered in order to be seen at the front end.
const JsonObjectImported=[json1,json2,json3]

//An array to hold the  scraped file name properties and then export them as an array to the front end.
export const filesAvailable=[]

//An array to hold the file array being selected at the front end , this takes one value and on every selection the array is updated.
export const QueriedFileInMotion=[]

//An async function for scraping name property in the json files registerd.
async function ScrapingName(){
    //Looping through the registration array
    JsonObjectImported.forEach((file)=>(
        //Looping through each registered file(Json array) scraping the name property.
        file.forEach((fileName)=>(
            //Pushing the file name property to the filesAvailable array and checking if the file has a name property, if not an error message is loged with the index of the file where a name property was not specified(in the json file).
           fileName.name?filesAvailable.push(fileName.name):console.error(`\nError : Failed to find name property in import Json file registed at  index ${file.name==undefined?JsonObjectImported.indexOf(file):''} in JsonObjectImported array\n `)
        ))
    ))
    // console.log(fileAvailable)
}
//This function is called to make the file names available on page load.
ScrapingName()

//This function recieves the file name selected at the front end and then finds the json file that holds the file name, after the json 
//is sent to the QueriedFileInMotion for querying .
//Note this fucntion doesnot Query the file but instead alocate it for querying in QueriedFileInMotion.
export async function fileAlocation(fileSelected) {
    //Seacrhing in the filesAvailable array if the selected file is avalid
    const foundFile=filesAvailable.find(item=>item===fileSelected)
   //Searching the registered files(JsonObjectImported) which file hold the name property passed
    const fileFoundToQuery=JsonObjectImported.forEach((file)=>(
        //Looping through each file searching for the name property
        file.find(function(fileFound){
            //If the a match (json array registered ) is found the file is then paased to the QueriedFileInMotion
            if(fileFound.name==foundFile){
                //If the QueriedFileInMotion array is greater than 0 the value is deleted because it has to take one value for quering
                if(QueriedFileInMotion.length>0){
                    async function ChangeQueryTarget(){
                        //Deleting the value found in QueriedFileInMotion
                        delete QueriedFileInMotion[0]
                        //Pushing the file match to QueriedFileInMotion
                        QueriedFileInMotion.push(fileFound)
                        // console.log(QueriedFileInMotion)
                    } 
                    ChangeQueryTarget()
                }
                //If the array is empty the match is pushed , this will happen on page refresh or load only
                else {
                    QueriedFileInMotion.push(fileFound)
                    // console.log(QueriedFileInMotion)
                }
            }
    })
        ))
   
}

//NOTE:
//For bebuging issues, uncomment the log statements above to make your work easier.






