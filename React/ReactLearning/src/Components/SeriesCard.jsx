export function SeriesCard ({car}){
    // console.log(props);
    const {image_url,name, model,price,engine_specs, top_speed, buy_url, summary} =  car;
    // const data = props.car;
    return(
        <li >
            <div>
                <img src={image_url.url} alt={image_url.alt} width="40%" height="40%"/>
            </div>
            <h2>{name}</h2>
            <h3>{model}</h3>
            <h3>{price}</h3>
            <p>{engine_specs}</p>
            <p>{top_speed}</p>
            <a href={buy_url.url}>{buy_url.alt}</a>
            <p>{summary}</p>
            <button>Buy now</button>
        </li>
    )
}

