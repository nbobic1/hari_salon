import { Haridressers }from '../../content/Content'

const HairdresserSelection =({})=>{
   console.log('HAIRDRESSERSELECTION') 

return (
<div className="bg-dark rounded p-10 mb-5">
    {
        Haridressers.map(item=>item)
    }
</div>
);
};

export default HairdresserSelection;