<script>
    import { DataTable,
      Link,
      Toolbar,
      ToolbarContent,
      ToolbarSearch,
      ToolbarMenu,
      ToolbarMenuItem,
      Button,
      Pagination,
      DataTableSkeleton 
    } from "carbon-components-svelte";
  
  
    import { baseUrl } from "../../../store.js";
    import { onMount } from "svelte";
  
    let companies = []
  
    onMount(async () => {
      const response = (await fetch(`${baseUrl}/audits`))
      companies = await response.json()
      
    });
  
    let pagination = {
      pageSize: 10, 
      page: 1
    }
    
    
  </script>
  
  <svelte:head>
      <title>Мониторинг ДВА</title>
  </svelte:head>
  
  
  {#if !companies} 
    <DataTableSkeleton />
  {:else}
    <DataTable
      title="Внутренний аудит"
      zebra
      sortable
      pageSize={pagination.pageSize}
      page={pagination.page}
      description="Мониторинг исполнения рекомендаций ДВАиКР"
      headers={[
        { key: 'id', value: '#' },
        { key: 'reportTitle', value: 'Отчет' },
        { key: 'reportID', value: 'Код' },
        { key: 'slug', value: 'EDMS' },
        { key: 'companyIdentifiedIn', value: 'Компания'}
      ]}
      rows={companies}> 
  
      <Toolbar>
        <ToolbarContent>
          <ToolbarSearch />
          <ToolbarMenu>
            <ToolbarMenuItem primaryFocus>Restart all</ToolbarMenuItem>
            <ToolbarMenuItem href="https://cloud.ibm.com/docs/loadbalancer-service"
              >API documentation</ToolbarMenuItem
            >
            <ToolbarMenuItem danger>Stop all</ToolbarMenuItem>
          </ToolbarMenu>
          <Button href="/companies/companyForm/">Добавить</Button>
        </ToolbarContent>
      </Toolbar>
  
      <svelte:fragment slot="cell" let:row let:cell>
      {#if cell.key === "caption"}
        <Link href="/#/companies/{row.id}">{cell.value}</Link>
      {:else if cell.key==="companyIdentifiedIn"}
        {cell.value.code}   
      {:else}
        {cell.value}
      {/if}
    </svelte:fragment>
  
  
    </DataTable> 
    <Pagination
    bind:pageSize={pagination.pageSize}
    bind:page={pagination.page}
    totalItems={companies.length}
  />
  
  {/if}
  
  