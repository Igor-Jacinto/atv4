import Container from "./Container";
import Conteiner2 from "./Conteiner2";

function App(){

	const conteiner = [
		
    {
			ico: "suap.png",
			desc: "Inicio",
		},
    {
			ico: "globo.png",
			desc: "globo.com",
		},
    {
			ico: "facebook.png",
			desc: "Facebook",
		},
    {
			ico: "cups.png",
			desc: "Home",
		},
    {
			ico: "ifro.png",
			desc: "Mirim",
		},
  ];
    const conteiner2 = [
    {
			ico2: "ifro.png",
			desc2: "AVA",
		},
    {
			ico2: "i.png",
			desc2: "SEI/IFRO",
		},
    {
			ico2: "gmail.png",
			desc2: "E",
		},
    {
			ico2: "ifro.png",
			desc2: "Mirim",
		},
    {
			ico2: "mais.png",
			desc2: "Add short...",
		},
	];

	return(
	
<div className="princ">
		<div className="cont1"> 
			{
			conteiner.map((cont, res) => {
					return <Container key={res}
							ico={cont.ico}
							desc={cont.desc}
						/>;
				})
        
			}

    </div>

    <div className="cont2">
{
			conteiner2.map((contt, ress) => {
					return <Conteiner2 key={ress}
							ico2={contt.ico2}
						  desc2={contt.desc2}
						/>;
				})
			}
	    </div>
      
    </div>

	);
}

export default App;

