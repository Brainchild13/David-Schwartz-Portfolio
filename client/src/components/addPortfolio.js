import react from 'react';

export default function AddPortfolio () {
    return (
        <form className="add-portfolio-form">
            <h1 className="form-name">Add A Portfolio</h1>
            <div>
                <label htmlFor="portfolio-name" className="form-label">Portfolio Name</label>
                <input type="text" className="form-input" id="portfolio-name" name="portfolio-name" autocomplete="off"/>
            </div>
            <div>
                <label htmlFor="portfolio-website" className="form-label">Website</label>
                <input type="text" className="form-input" id="portfolio-website" name="portfolio-website" autocomplete="off" />
            </div>
            <div>
                <label htmlFor="portfolio-software" className="form-label">Software Used</label>
                <input type="text" className="form-input" id="portfolio-software" name="portfolio-softwware" autocomplete="off" />
            </div>
            <div>
                <label htmlFor="portfolio-website" className="form-label">Portfolio Main Image</label>
                <input type="image" alt="portfolio-main-image" className="form-input form-image-input" id="portfolio-main-image" name="portfolio-main-image" autocomplete="off" />
            </div>
            <div>
                <label htmlFor="portfolio-additional-images" className="form-label">Portfolio Additional Images</label>
                <input type="image" alt="portfolio-additional-image" className="form-input form-image-input" id="portfolio-additional-images" name="portfolio-additional-images" autocomplete="off" />
            </div>

            <button type="submit">Add Portfolio</button>
        </form>
    )
}