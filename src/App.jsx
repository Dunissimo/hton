import { Header } from './components/Header';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ProjectList } from './pages/Project/ProjectList';
import { ReportList } from './pages/Report/ReportList';
import { Project } from './pages/Project/Project';
import { Report } from './pages/Report/Report';
import { CreateReport } from './pages/Report/CreateReport';
import { useEffect } from 'react';
import { StyleSwitcher } from './components/StyleSwitcher';

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == "/") {
            navigate("/projects");
        }
    }, [location]);
    
    return (
        <div className="App">
            <Header />
            
            <Routes>
                <Route path='/projects' element={<ProjectList />} />
                <Route path='/projects/:id' element={<Project />} />
                <Route path='/reports' element={<ReportList />} />
                <Route path='/reports/:id' element={<Report />} />
                <Route path='/reports/create' element={<CreateReport />} />
                <Route path='/styles' element={<StyleSwitcher />} />
            </Routes>
        </div>
    );
};

export default App;
