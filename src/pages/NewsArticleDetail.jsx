import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, CheckSquare } from 'lucide-react';
import { insightsData, calculateReadingTime } from './NewsAndInsights';
import './NewsArticleDetail.css';

const NewsArticleDetail = () => {
  const { id } = useParams();
  const article = insightsData.find(item => item.id === id);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | CyberAries`;
    } else {
      document.title = "Insight Not Found | CyberAries";
    }
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="container text-center">
          <h2>Insight Not Found</h2>
          <p>The insight article you are looking for does not exist or has been moved.</p>
          <Link to="/resources/news" className="back-to-insights-btn">
            <ArrowLeft size={16} /> Back to News & Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="news-article-detail-page">
      {/* Premium Dark Hero / Title Block */}
      <section className="article-hero bg-dark-cyber-detail">
        <div className="tech-bg-effects">
          <div className="hero-cyber-grid-detail"></div>
          <div className="hero-glow-detail"></div>
        </div>
        <div className="container article-hero-content">
          <Link to="/resources/news" className="back-link">
            <ArrowLeft size={16} /> Back to News & Insights
          </Link>
          <span className="article-badge-category">{article.category}</span>
          <h1 className="article-title-heading">{article.title}</h1>
          <p className="article-subtitle-lead">{article.subtitle}</p>
          
          <div className="article-meta-info">
            <div className="meta-item">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>{calculateReadingTime(article.content)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="article-body-section bg-white-grid">
        <div className="container editorial-container">
          {/* Key Takeaways Box */}
          {article.takeaways && article.takeaways.length > 0 && (
            <div className="takeaways-box">
              <h3 className="takeaways-title">
                <CheckSquare size={18} className="takeaways-title-icon" />
                KEY TAKEAWAYS
              </h3>
              <ol className="takeaways-list">
                {article.takeaways.map((takeaway, index) => (
                  <li key={index} className="takeaway-item">
                    <span className="takeaway-index">0{index + 1}</span>
                    <span className="takeaway-text">{takeaway}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Full Text Content */}
          <div className="article-content-rich">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="article-paragraph">{paragraph}</p>
            ))}
          </div>

          {/* Footer Navigation within Article */}
          <div className="article-navigation-footer">
            <Link to="/resources/news" className="back-to-insights-footer-btn">
              <ArrowLeft size={16} /> Return to News & Insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsArticleDetail;
