import "./Container.css";

function Conteiner2({ico2,desc2}){
	
	return( 
        
        <div className="segundo">

         <button className="principal">
        <img src={ico2} alt="icone do app" />
		<p>{desc2}</p>
		 </button>
         </div>
         
	)
}

export default Conteiner2;
