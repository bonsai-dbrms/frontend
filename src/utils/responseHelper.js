export const responseHelper = (data,FormDataResult) => {
    let resobj = {
        id: 123456,
        predicates: [
        ],
        result: []
            
        ,
    };

  

   let flagarray1 = [];
   for (let key in FormDataResult) {
       let matches = key.match(/(\d+)/);

       if (flagarray1.length === 0) {
           resobj.result.push(
               {
                   attribute_name: FormDataResult[`resultVariable00`],
                   value: FormDataResult[`resultValue${matches[0]}`],
                   type: FormDataResult[`resultType${matches[0]}`],
                   
               }
           )
           flagarray1.push(matches[0])
       } else {
           const found = flagarray1.find((item) => item === matches[0]);
           if (!found) {
               resobj.result.push(
                   {
                    attribute_name: FormDataResult[`resultVariable00`],
                    value: FormDataResult[`resultValue${matches[0]}`],
                    type: FormDataResult[`resultType${matches[0]}`],
                   }
               )
               flagarray1.push(matches[0])
              
             

           }
       }

   }


    let flagarray = [];
    for (let key in data) {
        let matches = key.match(/(\d+)/);

        if (flagarray.length === 0) {
            resobj.predicates.push(
                {
                    attribute_name: data[`variable${matches[0]}`],
                    operator: data[`operator${matches[0]}`],
                    value: data[`value${matches[0]}`],
                    type: data[`type${matches[0]}`],
                    position:matches[0]
                }
            )
            flagarray.push(matches[0])
        } else {
            const found = flagarray.find((item) => item === matches[0]);
            if (!found) {
                resobj.predicates.push(
                    {
                        attribute_name: data[`variable${matches[0]}`],
                        operator: data[`operator${matches[0]}`],
                        value: data[`value${matches[0]}`],
                        type: data[`type${matches[0]}`],
                        position:matches[0]
                    }
                )
                flagarray.push(matches[0])
               
              

            }
        }

    }
    resobj.predicates.forEach((item)=>{
    
        if(!item.attribute_name){
          let foundData =  resobj.predicates.find((t)=>t.position[0]===item.position[0])
          item['attribute_name']=foundData.attribute_name
          
        }
       
    })
    resobj.predicates.forEach((item)=>{
    
        delete item.position
       
    })
    return resobj;
};
