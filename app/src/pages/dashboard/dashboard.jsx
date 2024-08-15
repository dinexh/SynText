import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/footer';
const Dashboard = () => {
    return ( 
        <div className="dashboard-container">
            <div className="dashboard-container-in">
                <div className="dashboard-header">
                    <Nav/>
                </div>
                <div className="dashboard-footer">
                    <Footer/>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard