import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import RemotePagination from "./RemotePagination";
import {useHistory, useLocation} from "react-router-dom";
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import {fetchProducts} from "../redux/actions";
import Stars from "../Stars";

const Table = () => {
    const history = useHistory()
    const query = new URLSearchParams(useLocation().search);
    const dispatch = useDispatch()
    const {products, total} = useSelector((state) => state.products);
    const columns = [
        {
            dataField: 'body',
            text: 'REPO Name',
            filter: textFilter({
                defaultValue: query.get('repository')
            }),
        },
        {
            dataField: 'name',
            text: 'User Name'
        },
        {
            dataField: '',
            text: 'Stars',
            formatter: (cell, row) => <Stars row={row}/>
        },
        {
            dataField: 'email',
            text: 'Link To Repo'
        }
    ];
    const [page, setPage] = useState(1)

    useEffect(() => {
        setPage(parseInt(query.get("page")))
        dispatch(fetchProducts(1, 10, query.get('repository')))
    }, [])

    const onTableChange = (type, {page}) => {
        history.push(`/search?page=${page}&repository=${query.get('repository')}`)
        setPage(page)
        dispatch(fetchProducts(page, 10, query.get('repository')))
    }
    return (
        <RemotePagination
            columns={columns}
            data={products}
            page={page}
            totalSize={total}
            sizePerPage={10}
            onTableChange={onTableChange}
            filter={filterFactory()}
        />
    );

}

export default Table



