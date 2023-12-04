const AppointmentSelection =({})=>{
return (
    <div className="bg-light rounded mb-5 shadow-a flex flex-row">
        <div className="flex flex-col justify-around p-10 gap-3" >
          {
            Array.from({ length: 4 }, (_, index) => index).map(arg=>{
                const date=new Date()
                date.setDate(date.getDate()+arg);
                return date.getDate();
            }).map(item=>
                <div key={item} className="bg-mid rounded-sm shadow-a p-3 text-4xl text-center w-24 h-24 align-middle flex justify-center">
                    <div className="flex max-h-2">{item}</div>
                </div>
            )
          }   
        </div>
       
    </div>
);
};

export default AppointmentSelection;