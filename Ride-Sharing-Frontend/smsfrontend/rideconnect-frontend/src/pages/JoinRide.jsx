import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy ride data
const dummyRides = [
  { id: 1, driver: "Karthik Raj", from: "Chennai", to: "Bangalore", time: "7:00 AM", fare: 750, vehicle: "Sedan", rating: 4.5, availableSeats: 3 },
  { id: 2, driver: "Priya Sharma", from: "Chennai", to: "Bangalore", time: "5:30 PM", fare: 800, vehicle: "SUV", rating: 4.8, availableSeats: 2 },
  { id: 3, driver: "Rahul Mehta", from: "Hyderabad", to: "Chennai", time: "10:00 AM", fare: 650, vehicle: "Hatchback", rating: 4.2, availableSeats: 4 },
  { id: 4, driver: "Anita Singh", from: "Coimbatore", to: "Bangalore", time: "2:00 PM", fare: 700, vehicle: "Sedan", rating: 4.7, availableSeats: 1 },
  { id: 5, driver: "Ravi Kumar", from: "Chennai", to: "Madurai", time: "6:00 PM", fare: 600, vehicle: "Mini Van", rating: 4.0, availableSeats: 5 },
];

const JoinRide = () => {
  const navigate = useNavigate();
  const [rides] = useState(dummyRides);
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    date: "",
    minPrice: "",
    maxPrice: "",
    vehicleType: "",
    minRating: "",
  });

  const [bookingRide, setBookingRide] = useState(null);
  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    seats: 1,
  });

  const filteredRides = rides.filter((ride) => {
    return (
      (filters.from === "" || ride.from.toLowerCase().includes(filters.from.toLowerCase())) &&
      (filters.to === "" || ride.to.toLowerCase().includes(filters.to.toLowerCase())) &&
      (filters.minPrice === "" || ride.fare >= Number(filters.minPrice)) &&
      (filters.maxPrice === "" || ride.fare <= Number(filters.maxPrice)) &&
      (filters.vehicleType === "" || ride.vehicle === filters.vehicleType) &&
      (filters.minRating === "" || ride.rating >= Number(filters.minRating))
    );
  });

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`✅ Ride booked successfully for ${passenger.name} (${passenger.seats} seat/s)!`);
    setBookingRide(null);
    setPassenger({ name: "", age: "", seats: 1 });
  };

  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <h1 style={styles.heading}>Search & Book Rides</h1>

        {/* 🔍 Filters */}
        <div style={styles.filterBox}>
          <div style={styles.filterGrid}>
            <input
              type="text"
              placeholder="From"
              value={filters.from}
              onChange={(e) => setFilters({ ...filters, from: e.target.value })}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="To"
              value={filters.to}
              onChange={(e) => setFilters({ ...filters, to: e.target.value })}
              style={styles.input}
            />
            <input
              type="date"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              style={styles.input}
            />
            <select
              value={filters.vehicleType}
              onChange={(e) => setFilters({ ...filters, vehicleType: e.target.value })}
              style={styles.input}
            >
              <option value="">All Vehicle Types</option>
              <option value="Sedan">Car</option>
              <option value="SUV">Auto</option>
              <option value="Hatchback">Bike</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Mini Van">Mini Van</option>
             
            </select>
            <input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Min Rating"
              value={filters.minRating}
              onChange={(e) => setFilters({ ...filters, minRating: e.target.value })}
              style={styles.input}
            />
          </div>
        </div>

        {/* 🚗 Ride Cards */}
        {filteredRides.length > 0 ? (
          filteredRides.map((ride) => (
            <div key={ride.id} style={styles.rideCard}>
              <p><strong>Driver:</strong> {ride.driver}</p>
              <p><strong>Route:</strong> {ride.from} → {ride.to}</p>
              <p><strong>Time:</strong> {ride.time}</p>
              <p><strong>Fare:</strong> ₹{ride.fare}</p>
              <p><strong>Vehicle:</strong> {ride.vehicle}</p>
              <p><strong>Rating:</strong> ⭐ {ride.rating}</p>
              <p><strong>Available Seats:</strong> {ride.availableSeats}</p>
              <button style={styles.bookButton} onClick={() => setBookingRide(ride)}>Book Ride</button>
            </div>
          ))
        ) : (
          <p style={{ color: "#777" }}>No rides found for selected filters.</p>
        )}
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        {!bookingRide ? (
          <>
            <img
              src="https://s.yimg.com/ny/api/res/1.2/h2UmQz1EB4tmYPtyKlH92g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/2171818d82a70b51ae766e7635458bb7"
              alt="Join Ride"
              style={styles.image}
            />
            <button onClick={() => navigate("/dashboard")} style={styles.backLink}>
              ← Back to Dashboard
            </button>
          </>
        ) : (
          <div style={styles.bookingBox}>
            <h2 style={styles.subHeading}>
              Booking: {bookingRide.from} → {bookingRide.to}
            </h2>
            <form onSubmit={handleBooking}>
              <input
                type="text"
                placeholder="Passenger Name"
                required
                value={passenger.name}
                onChange={(e) => setPassenger({ ...passenger, name: e.target.value })}
                style={styles.input}
              />
              <input
                type="number"
                placeholder="Age"
                required
                value={passenger.age}
                onChange={(e) => setPassenger({ ...passenger, age: e.target.value })}
                style={styles.input}
              />
              <input
                type="number"
                placeholder="Seats"
                min="1"
                max={bookingRide.availableSeats}
                required
                value={passenger.seats}
                onChange={(e) => setPassenger({ ...passenger, seats: e.target.value })}
                style={styles.input}
              />
              <div style={styles.buttonGroup}>
                <button type="submit" style={styles.bookButton}>Confirm Booking</button>
                <button type="button" onClick={() => setBookingRide(null)} style={styles.cancelButton}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// ✅ Styles
const styles = {
  container: {
    display: "flex",
    backgroundColor: "#f1f5f9",
    minHeight: "100vh",
  },
  leftSection: {
    flex: 1.4,
    padding: "2rem 3rem",
    overflowY: "auto",
  },
  rightSection: {
    flex: 1,
    borderLeft: "1px solid #ddd",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    height: "100vh",
  },
  heading: {
    fontSize: "2.2rem",
    color: "#023e8a",
    marginBottom: "1.5rem",
  },
  subHeading: {
    fontSize: "1.5rem",
    color: "#023e8a",
    marginBottom: "1rem",
  },
  filterBox: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    marginBottom: "2rem",
  },
 filterGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1.2rem",
  marginTop: "0.5rem", 
},
input: {
  padding: "0.75rem 1rem", // Increased padding
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  width: "100%",
  boxSizing: "border-box",
},

  rideCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1.5rem",
    marginBottom: "1.5rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    borderLeft: "5px solid #0077b6",
  },
  bookButton: {
    backgroundColor: "#0077b6",
    color: "#fff",
    padding: "0.7rem 1.2rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "1rem",
  },
  cancelButton: {
    backgroundColor: "#ddd",
    color: "#000",
    padding: "0.7rem 1.2rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "1rem",
    marginLeft: "1rem",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  bookingBox: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
  backLink: {
    marginTop: "1rem",
    background: "none",
    border: "none",
    color: "#0077b6",
    textDecoration: "underline",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default JoinRide;
