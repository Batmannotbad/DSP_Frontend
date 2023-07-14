import React from 'react';
import './Profile.css'
import { useSelector } from 'react-redux';
import Header from '../../Component/Header/Header';

function Profile() {
  const user = useSelector(state => state.user); 

  return (
    <div className='d-flex flex-column gap-5'>
      <Header/>
      <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="text-center pb-4">
                          <img src="https://i.pinimg.com/564x/d0/d3/73/d0d373c821710888ae7f64149b03ec7e.jpg" alt="profile" class="img-lg rounded-circle mb-3 profile-img"/>
                          <div class="mb-3">
                            <h3>{user.Name}</h3>
                          </div>
                          <p class="w-75 mx-auto mb-3">{user.Description}</p>
                        </div>
                      
                        <div class="py-4">
                          <p class="clearfix">
                            <span class="float-left">
                              Tên người dùng: 
                            </span>
                            <span class="float-right text-muted">
                              {" "+ user.username}
                            </span>
                          </p>
                          <p class="clearfix">
                            <span class="float-left">
                              Email:
                            </span>
                            <span class="float-right text-muted">
                             {" "+user.Email}
                            </span>
                          </p>
                        </div>
                        <button class="profile-btn btn-block mb-2 p-2">Chỉnh sửa hồ sơ</button>
                      </div>
                      <div class="col-lg-8">
                        
                        <div class="mt-4 py-2 border-top border-bottom">
                          <ul class="nav profile-navbar">
                            <li class="nav-item">
                              <a class="nav-link active" href="#">
                                <i class="mdi mdi-newspaper"></i>
                                Feed
                              </a>
                            </li>
                            
                          </ul>
                        </div>
                        <div class="profile-feed">
                          <div class="d-flex align-items-start profile-feed-item gap-4 gap-4">
                            <img src="https://i.pinimg.com/564x/d0/d3/73/d0d373c821710888ae7f64149b03ec7e.jpg" alt="profile" class="img-sm rounded-circle"/>
                            <div class="ml-4">
                              <h6>
                                Mason Beck
                                <small class="ml-4 text-muted"><i class="mdi mdi-clock mr-1 ps-2"></i>10 hours</small>
                              </h6>
                              <p>
                                
                              </p>
                              <p class="small text-muted mt-2 mb-0">
                                <span>
                                  <i class="mdi mdi-star mr-1"></i>4
                                </span>
                                <span class="ml-2">
                                  <i class="mdi mdi-comment mr-1"></i>11
                                </span>
                                <span class="ml-2">
                                  <i class="mdi mdi-reply"></i>
                                </span>
                              </p>
                            </div>
                          </div>
                          <div class="d-flex align-items-start profile-feed-item gap-4">
                            <img src="https://i.pinimg.com/originals/03/4b/87/034b87bdd11d0c6a5211fb0f93952406.gif" alt="profile" class="img-sm rounded-circle"/>
                            <div class="ml-4">
                              <h6>
                                Willie Stanley
                                <small class="ml-4 text-muted"><i class="mdi mdi-clock mr-1"></i>10 hours</small>
                              </h6>
                              <p class="small text-muted mt-2 mb-0">
                                <span>
                                  <i class="mdi mdi-star mr-1"></i>4
                                </span>
                                <span class="ml-2">
                                  <i class="mdi mdi-comment mr-1"></i>11
                                </span>
                                <span class="ml-2">
                                  <i class="mdi mdi-reply"></i>
                                </span>
                              </p>
                            </div>
                          </div>
                          <div class="d-flex align-items-start profile-feed-item gap-4">
                            <img src="https://i.pinimg.com/564x/8a/bc/69/8abc699a17717f8cfec3da623b788f21.jpg" alt="profile" class="img-sm rounded-circle"/>
                            <div class="ml-4">
                              <h6>
                                Dylan Silva
                                <small class="ml-4 text-muted"><i class="mdi mdi-clock mr-1"></i>10 hours</small>
                              </h6>
                              <p>
                                When I first got into the online advertising business, I was looking for the magical combination 
                                that would put my website into the top search engine rankings
                              </p>
                              <p class="small text-muted mt-2 mb-0">
                                <span>
                                  <i class="mdi mdi-star mr-1"></i>4
                                </span>
                                <span class="ml-2">
                                  <i class="mdi mdi-comment mr-1"></i>11
                                </span>
                                <span class="ml-2">
                                  <i class="mdi mdi-reply"></i>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Profile;
