"use client";

import { useGetTeamsQuery } from '@/state/api';
import React from 'react';
import { useAppSelector } from '../redux';
import Header from '../(components)/Header';
import { 
     DataGrid, 
     GridColDef, 
     GridToolbarContainer, 
     GridToolbarExport, 
     GridToolbarFilterButton 
    } from '@mui/x-data-grid';
import { dataGridClassNames, dataGridSxStyles } from '@/lib/utils';

const CustomToolbar = () => (
    <GridToolbarContainer className='toolbar flex gap-2'>
       <GridToolbarFilterButton/>
       <GridToolbarExport/>
    </GridToolbarContainer>
)

const columns: GridColDef[] = [
    {field: "id", headerName: "Team Id", width: 100},
    {field: "teamName", headerName: "team name", width:200},
    {field: "productOwnerUserName", headerName: "Product Owner", width:200},
    {field: "productManagerUsername", headerName: "Project Manager", width:150},
    
];

const Teams = () => {
    const {data: teams, isLoading, isError} = useGetTeamsQuery();
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    if(isLoading) return <div className="">Loading...</div>
    if(isError || !teams) return <div className="">Error fetching teams</div> 
    return (
        <div className='flex w-full flex-col p-8'>
            <Header name='teams' />

            <div style={{ height: 650, width: "100%"}}>
              <DataGrid
                rows={teams || []}
                columns={columns}
                pagination
                slots={{
                    toolbar: CustomToolbar,
                }}
                className={dataGridClassNames}
                sx={dataGridSxStyles(isDarkMode)}
              />
            </div>
        </div>
    )
}

export default Teams;