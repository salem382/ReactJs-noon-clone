import AdminSidebar from '../../../components/adminComponent/adminSidebar/AdminSidebar';
import Cell from '../../../components/adminComponent/cell/Cell';
import SearchBar from '../../../components/adminComponent/searchbar/SearchBar';

const Electronic = () => {

    return (
        <section className='d-flex'>
        <AdminSidebar />
        <div className='w-100'>
            <SearchBar />
            <div className='mt-5'>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>
    </section>
    )
}

export default Electronic;