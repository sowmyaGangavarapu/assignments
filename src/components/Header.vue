<template> 
  <div class="hello">
    <!--header area start-->
    <header>
      <div class="left_area">
        <div><img src="@/assets/images/appiness-logo.png"></div>
      </div>
      <div class="right_area">
        <a href="#" class="logout_btn my-btn">Logout</a>
      </div>
    </header>
    <!--header area end-->
    <!--mobile navigation bar start-->
    <div class="mobile_nav">
      <div class="nav_bar">
        <img src="@/assets/images/user.png" class="mobile_profile_image" alt="">
        <i class="fa fa-bars nav_btn"></i>
      </div>
      <div class="mobile_nav_items">
        <a href="#"><i class="fas fa-table"></i><span>Received Orders</span></a>
      </div>
    </div>
    <!--mobile navigation bar end-->
     <!--sidebar start-->
    <div class="sidebar">
      <div class="profile_info">
        <img src="@/assets/images/user.png" class="profile_image" alt="">
        <h4>User</h4>
      </div>
      <a href="#"><i class="fas fa-table"></i><span>Received Orders</span></a>
    </div>
    <!--sidebar end-->
  </div>
</template>

<script>
export default {
}
</script>


