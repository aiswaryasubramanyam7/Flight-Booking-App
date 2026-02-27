// App.js
return (
  <div className="container mt-5">
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h2 className="mb-0">✈️ FlightFinder: Available Flights</h2>
      </div>
      <div className="card-body">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Flight #</th>
              <th>Airline</th>
              <th>From</th>
              <th>To</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {flights.map(flight => (
              <tr key={flight._id}>
                <td><strong>{flight.flightNumber}</strong></td>
                <td>{flight.airline}</td>
                <td>{flight.departureCity}</td>
                <td>{flight.destinationCity}</td>
                <td className="text-success font-weight-bold">${flight.price}</td>
                <td>
                  <button className="btn btn-outline-primary btn-sm">Book Now</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);