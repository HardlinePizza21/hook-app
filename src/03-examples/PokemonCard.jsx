export const PokemonCard = ({id, name, sprites = []}) => {
  return (
    <section style={{height:200}}>
        <h2 className="text-capitalize"># {id} - {name}</h2>


        {/* images */}

        <div>

          {
            sprites.map((sprite, index) => {
              return(
                <img key={index} src={sprite} alt={name}/>
              )
            })
          }

        </div>

    </section>
  )
}
