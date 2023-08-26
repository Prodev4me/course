<?php 
  echo "
  <div class='nav-header'>
            <a href='index.php' class='brand-logo'>
                <img class='logo-abbr' src='images/logo-white.png' alt=''>
                <h2 class='text-white pt-3 pl-3'>OnlineTutor</h2>
            </a>

            
        </div>
        <div class='header'>
            <div class='header-content'>
                <nav class='navbar navbar-expand'>
                    <div class='collapse navbar-collapse justify-content-between'>
					<div class='header-left'>
                            
                        </div>

                        <ul class='navbar-nav header-right'>
                           
                            <li class='nav-item dropdown header-profile'>
                                <a class='nav-link' href='#' role='button' data-toggle='dropdown'>
                                    <img src='images/profile/education/pic1.jpg' width='20' alt=''>
                                </a>
                                <div class='dropdown-menu dropdown-menu-right'>
                                    
                                    <a href='logout.php' class='dropdown-item ai-icon'>
                                        <svg id='icon-logout' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewbox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-log-out'><path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path><polyline points='16 17 21 12 16 7'></polyline><line x1='21' y1='12' x2='9' y2='12'></line></svg>
                                        <span class='ml-2'>Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <!--**********************************
            Header end ti-comment-alt
        ***********************************-->

        <!--**********************************
            Sidebar start
        ***********************************-->
        <div class='dlabnav'>
            <div class='dlabnav-scroll'>
                <ul class='metismenu' id='menu'>
                    <li class='nav-label first'>Main Menu</li>
                    <li><a class='has-arrow' href='index.php' aria-expanded='false'>
							<i class='la la-home'></i>
							<span class='nav-text'>Dashboard</span>
						</a>
                        
                    </li>
					
					<li><a class='has-arrow' href='javascript:void()' aria-expanded='false'>
							<i class='la la-user'></i>
							<span class='nav-text'>Teachers</span>
						</a>
                        <ul aria-expanded='false'>
                            <li><a href='all-teachers.php'>All Teachers</a></li>
                            <li><a href='add-teacher.php'>Add Teacher</a></li>
                        </ul>
                    </li>
					<li><a class='has-arrow' href='javascript:void()' aria-expanded='false'>
							<i class='la la-users'></i>
							<span class='nav-text'>Students</span>
						</a>
                        <ul aria-expanded='false'>
                            <li><a href='all-students.php'>All Students</a></li>
                            <li><a href='add-student.php'>Add Students</a></li>
                        </ul>
                    </li>
					
				</ul>
            </div>
        </div>
  ";
?>