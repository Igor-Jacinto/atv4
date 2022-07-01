import Container from "./Container";
import Conteiner2 from "./Conteiner2";

function App(){

	const conteiner = [
		
    {
			ico: "cachorro.jpg",
			desc: "Inicio",
		},
    {
			ico: "img/",
			desc: "globo.com",
		},
    {
			ico: "img/",
			desc: "Facebook",
		},
    {
			ico: "img/",
			desc: "Home",
		},
    {
			ico: "img/",
			desc: "Mirim",
		},
  ];
    const conteiner2 = [
    {
			ico2: "img/",
			desc2: "AVA",
		},
    {
			ico2: "img/",
			desc2: "SEI/IFRO",
		},
    {
			ico2: "img/",
			desc2: "E",
		},
    {
			ico2: "img/",
			desc2: "Mirim",
		},
    {
			ico2: "img/",
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

