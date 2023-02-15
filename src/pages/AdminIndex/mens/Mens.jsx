import AdminSidebar from '../../../components/adminComponent/adminSidebar/AdminSidebar';
import SearchBar from '../../../components/adminComponent/searchbar/SearchBar';

const Mens = () => {

    return (
        <section className='d-flex'>
        <AdminSidebar />
        <div className='w-100'>
            <SearchBar />
        </div>
    </section>
    )
}

export default Mens;