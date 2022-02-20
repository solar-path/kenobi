<script>
	import "carbon-components-svelte/css/white.css";
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SideNavDivider,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  import Router from 'svelte-spa-router'
  import Home from './routes/Index.svelte';
  import About from './routes/About.svelte';
  import Contact from './routes/Contact.svelte';
  import NotFound from './routes/NotFound.svelte';
import Register from "./routes/auth/register.svelte";
import Login from "./routes/auth/login.svelte";
import Profile from "./routes/auth/profile.svelte";
import Forgot from "./routes/auth/forgot.svelte";
import Manual from "./routes/manual.svelte";
import Companies from "./routes/admin/companies/Companies.svelte";
import CompanyDetail from "./routes/admin/companies/CompanyDetail.svelte";
import CompanyForm from "./routes/admin/companies/CompanyForm.svelte";
import AuditDetail from "./routes/admin/audits/AuditDetail.svelte";
import AuditForm from "./routes/admin/audits/AuditForm.svelte";
import Audits from "./routes/admin/audits/Audits.svelte";

  
  const routes = {
    '/':  Home,
    '/about': About,
    '/contact': Contact,
    '/manual': Manual,
    '/auth/login': Login,
    '/auth/register': Register,
    '/auth/profile': Profile,
    '/auth/forgot': Forgot,
    '/admin/LE/companies': Companies,
    '/admin/LE/companyDetail': CompanyDetail,
    '/admin/LE/companyForm': CompanyForm,
    '/admin/IA/audits': Audits,
    '/admin/IA/auditDetails': AuditDetail,
    '/admin/IA/auditForm': AuditForm,

    '*': NotFound
  }

  let isSideNavOpen = false;
</script>

<Header company="ERG" platformName="Adam" href="/" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="#/about" text="О программе"  />
    <HeaderNavItem href="#/contact" text="Связаться" />
    <HeaderNavItem href="#/manual" text="Руководство" />
    <HeaderNavMenu text="Приветствую, Гость">
      <HeaderNavItem href="#/auth/login" text="Авторизация" />
      <HeaderNavItem href="#/auth/register" text="Регистрация" />
      <HeaderNavItem href="#/auth/profile" text="Профиль" />
      <HeaderNavItem text="Выход" />
    </HeaderNavMenu>
  </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink href='#/admin/LE/companies' text="Юридические лица"/>
    <SideNavLink href='#/admin/IA/audits' text="Внутренний аудит"/>
    <SideNavLink text="Link 3" />
    <SideNavDivider />
    <SideNavLink text="Link 4" />
  </SideNavItems>
</SideNav>

<Content>
  <Grid>
    <Row>
      <Column>
        <Router {routes} />
      </Column>
    </Row>
  </Grid>
</Content>
