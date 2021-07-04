<template>
  <div class="article-wrapper">
    <div class="article-card">
      <div class="icons">
        <div class="icon edit-icon">
          <Edit class="edit" />
        </div>
        <div class="icon delete-icon">
          <Delete class="delete" />
        </div>
      </div>

      <img
        :src="require(`../assets/blogCards/${article.articleCoverPhoto}.jpg`)"
        alt=""
      />

      <div class="info">
        <h4>{{ article.articleTitle }}</h4>
        <h6>Posted on {{ article.createdDate }}</h6>
        <div class="link-container">
            <router-link class="link" to="#">View this article <Arrow class="arrow arrow-article"/></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";
export default {
  name: "ArticleCard",
  props: ["article"],
  components: {
    Arrow,
    Edit,
    Delete,
  },
};
</script>

<style lang="scss" scoped>
.article-card {
  display: flex;
  position: relative;
  cursor: pointer;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;
//   border: 1px solid #000;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rbga(0, 0, 0, 0.1),
      0 2px 4px -1px rbga(0, 0, 0, 0.06);
  }

  .icons {
    display: flex;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s ease all;
    //   border: 1px solid #000;

      .edit,
      .delete {
        pointer-events: none;
        height: 15px;
        width: auto;
        
        path {
            fill: #000; 
        }
      }
    }

    .edit-icon {
      &:hover {
        background-color: green;
      }
    }

    .delete-icon {
      &:hover {
        background-color: red;
      }
    }

    &:nth-child(1) {
      margin-right: 8px;
    }
  }

  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;

    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }

    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }

    .link-container {
        width: 70%;

        &:hover {
            border-bottom: 1px solid #000;
        }

        .link {
            display: inline-flex;
            align-items: center;
            margin-top: auto;
            font-weight: 500;
            padding-top: 20px;
            font-size: 12px;
            padding-bottom: 4px;
            transition: 0.5s ease-in all;

            &:hover {
                color: rgba(48, 48, 48, 0.8);
                
            }
        }
    }
    
  }
}
</style>