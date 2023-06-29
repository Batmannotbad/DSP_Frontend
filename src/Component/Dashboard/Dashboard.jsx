import React from 'react'
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-3'>
                <div className='card side-card'>
                    <div className='card-body'>
                        <div className='d-grid'>
                            <a href='' className='btn insert-btn'>
                            <i class="fa-solid fa-plus"></i> Thêm Bài Viết
                            </a>
                        </div>
                        <h5 className='my-3'>Bài Viết Của Tôi</h5>
                        <div className='fm-menu'>
                        <div class="list-group list-group-flush"> <a href="" class="list-group-item py-1"><i class="bx bx-folder me-2"></i><span>Tất cả</span></a>
                            <a href="" class="list-group-item py-1"><i class="bx bx-devices me-2"></i><span>Bài viết đã tạo</span></a>
                            <a href="" class="list-group-item py-1"><i class="bx bx-analyse me-2"></i><span>Bài viết gần đây</span></a>
                            <a href="" class="list-group-item py-1"><i class="bx bx-plug me-2"></i><span>Bài viết được chia sẻ</span></a>
                            <a href="" class="list-group-item py-1"><i class="bx bx-trash-alt me-2"></i><span>Bài viết đã ẩn</span></a>
					    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-9">
		<div class="card">
			<div class="card-body">
				<div class="fm-search">
					<div class="mb-0">
						<div class="input-group input-group-lg">	<span class="input-group-text bg-transparent"><i class="fa fa-search"></i></span>
							<input type="text" class="form-control" placeholder="Tìm kiếm..."/>
						</div>
					</div>
				</div>
				<h5 className='mt-3'>Bài viết đã tạo</h5>
				<div class="row mt-3">
					<div class="col-12 col-lg-4">
						<div class="card shadow-none border radius-15">
							<div class="card-body">
								<div class="d-flex align-items-center">
									<div class="font-30 text-primary"><i class="bx bxs-folder"></i>
									</div>
									<div class="user-groups ms-auto">
										<img src="https://i.pinimg.com/564x/0c/d9/52/0cd9527f4c8b8a25b8e32b68fe1cf96c.jpg" width="35" height="35" class="rounded-circle" alt=""/>
										<img src="https://i.pinimg.com/564x/7b/c1/c8/7bc1c8c9621bc0eaba5b6a3c1c32699e.jpg" width="35" height="35" class="rounded-circle" alt=""/>
									</div>
									<div class="user-plus">+</div>
								</div>
								<h6 class="mb-0 box-name">Hehe</h6>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-4">
						<div class="card shadow-none border radius-15">
							<div class="card-body">
								<div class="d-flex align-items-center">
									<div class="font-30 text-primary"><i class="bx bxs-folder"></i>
									</div>
									<div class="user-groups ms-auto">
										<img src="https://i.pinimg.com/564x/9a/35/c4/9a35c471c5414c45b9a4779d985e3eaf.jpg" width="35" height="35" class="rounded-circle" alt=""/>
									</div>
								</div>
								<h6 class="mb-0 box-name">Huhu</h6>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-4">
						<div class="card shadow-none border radius-15">
							<div class="card-body">
								<div class="d-flex align-items-center">
									<div class="font-30 text-primary"><i class="bx bxs-folder"></i>
									</div>
									<div class="user-groups ms-auto">
										<img src="https://i.pinimg.com/564x/7c/6f/ec/7c6fec9ff3b0501766736799258bc486.jpg" width="35" height="35" class="rounded-circle" alt=""/>
										<img src="https://i.pinimg.com/564x/03/a3/87/03a38791415f8fcb894b97d8358266ed.jpg" width="35" height="35" class="rounded-circle" alt=""/>
									</div>
								</div>
								<h6 class="mb-0 box-name">Haha</h6>
							</div>
						</div>
					</div>
				</div>
				
				<h5>Được chia sẻ với tôi</h5>
				<div class="row mt-3">
					<div class="col-12 col-lg-4">
						<div class="card shadow-none border radius-15">
							<div class="card-body">
								<div class="d-flex align-items-center">
									<div class="font-30 text-primary"><i class="bx bxs-folder"></i>
									</div>
									<div class="user-groups ms-auto">
										<img src="https://i.pinimg.com/564x/ba/f7/3e/baf73ecd2663b7e5bd386de40729736e.jpg" width="35" height="35" class="rounded-circle" alt=""/>
										<img src="https://i.pinimg.com/564x/60/7a/d5/607ad53ab2bb6e00adc0eebbcfd573f8.jpg" width="35" height="35" class="rounded-circle" alt=""/>
									</div>
									<div class="user-plus">+</div>
								</div>
								<h6 class="mb-0 box-name">Batmannotbad</h6>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-4">
						<div class="card shadow-none border radius-15">
							<div class="card-body">
								<div class="d-flex align-items-center">
									<div class="font-30 text-primary"><i class="bx bxs-folder"></i>
									</div>
									<div class="user-groups ms-auto">
										<img src="https://i.pinimg.com/564x/9e/32/17/9e32175d241e1acd0dc4733a785815df.jpg" width="35" height="35" class="rounded-circle" alt=""/>
									</div>
								</div>
								<h6 class="mb-0 box-name">Sk8ctheinfinity</h6>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-4">
						<div class="card shadow-none border radius-15">
							<div class="card-body">
								<div class="d-flex align-items-center">
									<div class="font-30 text-primary"><i class="bx bxs-folder"></i>
									</div>
									<div class="user-groups ms-auto">
										<img src="https://i.pinimg.com/564x/cc/09/30/cc0930d6fe3404d982d00d20fec93cb2.jpg" width="35" height="35" class="rounded-circle" alt=""/>
										<img src="https://i.pinimg.com/564x/b2/ea/14/b2ea14c506b325a2261d814eb054e841.jpg" width="35" height="35" class="rounded-circle" alt=""/>
									</div>
								</div>
								<h6 class="mb-0 box-name">Gee gee</h6>
							</div>
						</div>
					</div>
				</div>
				
				<div class="d-flex align-items-center">
					<div>
						<h5 class="mb-0">Gần đây</h5>
					</div>
					<div class="ms-auto"><a href="" class="btn btn-sm btn-outline-secondary">Xem tất cả</a>
					</div>
				</div>
				<div class="table-responsive mt-3">
					<table class="table table-striped table-hover table-sm mb-0">
						<thead>
							<tr>
								<th>Chủ sở hữu <i class="bx bx-up-arrow-alt ms-2"></i>
								</th>
								<th>Thành viên</th>
								<th>Sửa đổi lần cuối</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div><i class="bx bxs-file-pdf me-2 font-24 text-danger"></i>
										</div>
										<div class="font-weight-bold text-danger">Competitor Analysis Template</div>
									</div>
								</td>
								<td>Chỉ mình tôi</td>
								<td>Sep 3, 2019</td>
								<td><i class="fa fa-ellipsis-h font-24"></i>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div><i class="bx bxs-file me-2 font-24 text-primary"></i>
										</div>
										<div class="font-weight-bold text-primary">Landing Page Structure</div>
									</div>
								</td>
								<td>10 thành viên</td>
								<td>Jul 17, 2019</td>
								<td><i class="fa fa-ellipsis-h font-24"></i>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div><i class="bx bxs-file-doc me-2 font-24 text-success"></i>
										</div>
										<div class="font-weight-bold text-success">Review Checklist Template</div>
									</div>
								</td>
								<td>7 thành viên</td>
								<td>Sep 8, 2023</td>
								<td><i class="fa fa-ellipsis-h font-24"></i>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
        </div>

    </div>
  )
}

export default Dashboard