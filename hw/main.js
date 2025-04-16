document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
  
    const header = document.createElement('div');
    header.className = 'showcase-header';
  
    const title = document.createElement('h1');
    title.className = 'showcase-title';
    title.textContent = 'Last works';
    header.appendChild(title);
  
    const exploreBtn = document.createElement('a');
    exploreBtn.className = 'btn-showcase';
    exploreBtn.textContent = 'Explore Showcase';
    exploreBtn.href = '#';
    header.appendChild(exploreBtn);
  
    root.appendChild(header);
  
    const grid = document.createElement('div');
    grid.className = 'showcase-grid';
    root.appendChild(grid);
  
    const cardsData = [
      {
        title: 'Startup Framework',
        text: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        btnText: 'Explore',
        btnClass: 'btn--primary',
        cardClass: 'card--light'
      },
      {
        title: 'Web Generator',
        text: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        btnText: 'Explore',
        btnClass: 'btn--secondary',
        cardClass: 'card--outline'
      },
      {
        title: 'Slides 4',
        text: 'All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.',
        btnText: 'Explore',
        btnClass: 'btn--light',
        cardClass: 'card--dark'
      },
      {
        title: 'Postcards',
        text: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
        btnText: 'Explore',
        btnClass: 'btn--outline-white',
        cardClass: 'card--postcards',
        bgImage: 'assets/images/image.png'
      }
    ];
  
    cardsData.forEach(data => {
      const card = document.createElement('div');
      card.className = `card ${data.cardClass}`;
      if (data.bgImage) {
        card.style.backgroundImage = `url('${data.bgImage}')`;
      }
  
      const cardTitle = document.createElement('h2');
      cardTitle.className = 'card-title';
      cardTitle.textContent = data.title;
  
      const cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.textContent = data.text;
  
      const btn = document.createElement('a');
      btn.className = `btn ${data.btnClass}`;
      btn.textContent = data.btnText;
      btn.href = '#';
  
      card.append(cardTitle, cardText, btn);
      grid.appendChild(card);
    });
  });
  