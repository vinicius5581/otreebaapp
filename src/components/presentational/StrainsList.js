import React from 'react';

const StrainsList = ({error, loading, strains}) => {
    if (error) {
        return <div>Error! {error.message}</div>;
      }
  
      if (loading) {
        return <div>Loading...</div>;
      }
  
      return (
        <ul>
          {strains.map(strain =>
            <li key={strain.id}>
                <h1>{strain.name}</h1>
                <img src={strain.image} />
                <p>OCPC: {strain.ocpc}</p>
                <a target='_blank' href={strain.url}>link</a>
                <p>Genetics: {strain.genetics.names}</p>
                

                <pre>
                    {
                    JSON.stringify(strain)
                    }
                </pre>
            </li>
          )}
        </ul>
      );
}


export default StrainsList;