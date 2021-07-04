<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else>{{ post.blogHTML }}</p>
        <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
          Early Access<Arrow class="arrow arrow-light" />
        </router-link>
        <router-link class="link" v-else to="#">
          More Information<Arrow class="arrow" />
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img
        v-if="post.welcomeScreen"
        :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
        alt=""
      />
      <img
        v-else
        :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "BlogPost",
  props: ["post"],
  components: {
    Arrow,
  },
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rbga(0, 0, 0, 0.1),
    0 2px 4px -1px rbga(0, 0, 0, 0.06);
  @media (min-width: 700px) {
    min-height: 100%;
    max-width: 100%;
    flex-direction: row;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    order: 2;
    background-color: rgb(233, 230, 230);
    @media (min-width: 700px) {
      order: 1;
    }

    // @media (max-width: 769px) {
    //   flex: 4;
    // }

    div {
      max-width: 375px;
      padding: 72px 24px;
      @media (min-width: 700px) {
        padding: 0 24px;
      }

      h2 {
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media (min-width: 700px) {
          font-size: 40px;
        }
      }

      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.5;
      }

      .content-preview {
        font-size: 13px;
        max-height: 24px;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .link {
        color: #000;
        border-radius: 5px;
        box-shadow: 2px 2px 2px 2px rgba(153, 153, 153, 0.5);
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding: 0px 5px 4px 5px;
        border-bottom: 1px solid transparent;
        transition: 0.5s ease-in all;
        z-index: 2;

        &:hover {
          border-bottom: 1px solid;
          border-bottom-color: #303030;
          animation-duration: 2s;
          position: relative;
          animation-name: linkHover;
          animation-iteration-count: infinite;

          @keyframes linkHover {
            0%   { left:0px; top:0px;}
            50%  { left:20px; top:0px;}
            100% { left:0px; top:0px;}
         }
        }
        
        @media (max-width: 700px) {
            border-bottom: 2px solid;
            border-bottom-color: #303030;
            animation-duration: 2s;
            position: relative;
            animation-name: linkHover;
            animation-iteration-count: infinite;

            @keyframes linkHover {
                0%   { left:0px; top:0px;}
                50%  { left:20px; top:0px;}
                100% { left:0px; top:0px;}
            }
        }
      }

      .link-light {
        &:hover {
          border-bottom-color: #fff;
          animation-duration: 2s;
          position: relative;
          animation-name: linkHover;
          animation-iteration-count: infinite;

          @keyframes linkHover {
            0%   { left:0px; top:0px;}
            50%  { left:20px; top:0px;}
            100% { left:0px; top:0px;}
         }
        }
        @media (max-width: 700px) {
            animation-duration: 2s;
            position: relative;
            animation-name: linkHover;
            animation-iteration-count: infinite;

            @keyframes linkHover {
                0%   { left:0px; top:0px;}
                50%  { left:20px; top:0px;}
                100% { left:0px; top:0px;}
            }
        }
      }
    }
  }

  .blog-photo {
    order: 1;
    flex: 1;
    box-shadow: 0 4px 6px -1px rbga(0, 0, 0, 0.1),
      0 2px 4px -1px rbga(0, 0, 0, 0.06);

    @media (min-width: 700px) {
      order: 2;
    }

    @media (min-width: 800px) {
      order: 4;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }

    .blog-photo {
      order: 1;
    }
  }
}
</style>
