import './faculty.css'
let totalDoctors,satisfiedCustomers;
totalDoctors= 46;
satisfiedCustomers=60;

const Faculty = () => {
    return (
        <div className="faculty-container">
            <div className="faculty-section">
                <img className="faculty-img" src="/doctor-count.png" alt=""  />
                <h4>
                    Number of doctors connnected with us...{totalDoctors}
                </h4>
            </div>
            
            <div className="faculty-section">
                <img className="faculty-img" src="/doctor-count.png" alt=""  />
                <h4>
                    Satisfied patients = {satisfiedCustomers}
                </h4>
            </div>
        </div>
    );
}
 
export default Faculty;