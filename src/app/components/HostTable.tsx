import React, { useMemo } from 'react';
import type { TableColumn } from '@dynatrace/strato-components-preview/tables';
import { DataTable } from '@dynatrace/strato-components-preview/tables';

interface HostTableProps {
    data: Object[]
}

const tableColumns: TableColumn[] = [
    {
        header: 'HOST name',
        accessor: 'displayName',
        ratioWidth: 1
    },
    {
        header: 'Host ID',
        accessor: 'entityId',
        ratioWidth: 1
    },
    {
        header: 'Host Group Name',
        accessor: 'properties.hostGroupName',
        ratioWidth: 1
    },
    {
        header: 'OneAgent Version',
        accessor: 'properties.installerVersion',
        ratioWidth: 0.5
    },
    {
        header: 'State',
        accessor: 'properties.state',
        ratioWidth: 1
    }
]

export const HostTable = ({data}: HostTableProps) => {
    const thisColumns = useMemo<TableColumn[]>(() => tableColumns, []);
   
    return <DataTable columns={thisColumns} data={data} fullWidth />;
}