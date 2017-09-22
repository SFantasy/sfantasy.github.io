import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="footer-section">
          <p className="footer-section__title">Write</p>
          <ul className="footer-section__list">
            <li><a href="http://blog.fantasy.codes">Blog</a></li>
            <li><a href="https://www.gitbook.com/@sfantasy">Gitbook</a></li>
            <li><a href="http://www.jianshu.com/users/7YqELy/latest_articles">简书</a></li>
            <li><a href="https://zhuanlan.zhihu.com/fantasy-land">知乎专栏</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-section__title">Social</p>
          <ul className="footer-section__list">
            <li><a href="https://github.com/SFantasy">Github</a></li>
            <li><a href="http://weibo.com/shaofantasy">Weibo</a></li>
            <li><a href="https://www.douban.com/people/fanTasy00/">Douban</a></li>
            <li><a href="https://unsplash.com/@fantasyshao/collections">Unsplash</a></li>
            <li><a href="http://fantasyshao.lofter.com">Lofter</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-section__title">Contact</p>
          <ul className="footer-section__list">
            <li><a href="mailto:fantasyshao@icloud.com">Mail</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}
