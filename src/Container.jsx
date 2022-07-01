import "./Container.css";

function Container({ico, desc}){
	
	return( 
        <div className="primeiro">

		<button className="principal">
        <img src={ico} alt="icone do app" />
		<p>{desc}</p>
		 </button>

         </div>
	)


}

export default Container;

