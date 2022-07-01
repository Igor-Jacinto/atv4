import "./Container.css";

function Container({ico, desc}){
	
	return( 
        <div className="primeiro">

		<button className="botao">
        <img className="imagem" src={ico} alt="icone do app" />
		<p>{desc}</p>
		 </button>

         </div>
	)


}

export default Container;

