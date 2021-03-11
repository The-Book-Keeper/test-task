import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const RemotePagination = ({page, sizePerPage, totalSize, ...rest}) => {
    return (
        <div className={`container mt-5`}>
            <BootstrapTable
                remote
                hover
                striped
                condensed
                keyField="id"
                pagination={paginationFactory({page, sizePerPage, totalSize})}
                {...rest}
            />
        </div>
    )
};

export default RemotePagination