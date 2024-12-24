import React, { useState } from 'react';
import './../../App.css'

const Feedback = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('1');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedback = {
      name,
      email,
      rating,
      comments,
    };

    console.log('Feedback Submitted:', feedback);
    setSubmitted(true); // Display thank you message
  };
    return (
        <div className="feedback-form-container mx-auto mt-11">
      {!submitted ? (
        <>
          <div className="form-header">
            <h2>We Value Your Feedback</h2>
            <p>Let us know how we're doing! Your feedback helps us improve.</p>
          </div>

          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Submit Feedback
            </button>
          </form>
        </>
      ) : (
        <div className="thank-you-message">
          <h3>Thank you for your feedback!</h3>
        </div>
      )}
    </div>
  );
};

export default Feedback;