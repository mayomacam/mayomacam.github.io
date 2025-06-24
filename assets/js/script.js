const categoryButtons = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('search-input');
const items = document.querySelectorAll('.item');

const itemsPerPage = 9; // Define items per page globally


const tagButtons = document.querySelectorAll('.tag-btn');
const tagsMenu = document.getElementById('tags-menu');

let currentCategory = 'all';

function filterItemsByCategory(category) {
	items.forEach(item => {
		const itemCats = item.getAttribute('data-category').split(' ');
		item.style.display = category === 'all' || itemCats.includes(category) ? 'block' : 'none';
	});

	const filteredItems = Array.from(items).filter(item => item.style.display !== 'none');
	const paginationContainer = document.querySelector('.pagination');
	if (paginationContainer) {
		paginationContainer.innerHTML = ''; // Clear existing pagination
		const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

		function showPage(page) {
			filteredItems.forEach((item, index) => {
				item.style.display = index >= (page - 1) * itemsPerPage && index < page * itemsPerPage ? 'block' : 'none';
			});
		}

		if (totalPages > 1) {
			for (let i = 1; i <= totalPages; i++) {
				const pageButton = document.createElement('button');
				pageButton.textContent = i;
				pageButton.className = 'page-btn';
				pageButton.style.margin = '0 5px';
				pageButton.style.padding = '8px 12px';
				pageButton.style.border = '1px solid #aaa';
				pageButton.style.borderRadius = '4px';
				pageButton.style.cursor = 'pointer';
				pageButton.style.background = '#f4f4f4';
				pageButton.addEventListener('click', () => showPage(i));
				paginationContainer.appendChild(pageButton);
			}
		}

		showPage(1); // Show the first page by default
	}
}

function updateCounts() {
	categoryButtons.forEach(button => {
		const category = button.dataset.category;
		let count;
		if (category === 'all') {
			count = items.length; // Count all items
		} else {
			count = Array.from(items).filter(item => item.getAttribute('data-category').split(' ').includes(category)).length;
		}
		button.setAttribute('data-count', count);
	});
categoryButtons.forEach(button => {
	button.addEventListener('click', () => {
		const category = button.getAttribute('data-category');
		items.forEach(item => item.style.display = 'none'); // Hide all items
		filterItemsByCategory(category);
	});
});
}
updateCounts();


function addPagination() {
	const paginationContainer = document.createElement('div');
	paginationContainer.className = 'pagination';
	paginationContainer.style.textAlign = 'center';
	paginationContainer.style.marginTop = '20px';

	function showPage(page, filteredItems) {
		filteredItems.forEach((item, index) => {
			item.style.display = index >= (page - 1) * itemsPerPage && index < page * itemsPerPage ? 'block' : 'none';
		});
	}

	function updatePagination(filteredItems) {
		paginationContainer.innerHTML = ''; // Clear existing pagination
		const totalItems = filteredItems.length;
		const totalPages = Math.ceil(totalItems / itemsPerPage);

		if (totalPages > 1) {
			for (let i = 1; i <= totalPages; i++) {
				const pageButton = document.createElement('button');
				pageButton.textContent = i;
				pageButton.className = 'page-btn';
				pageButton.style.margin = '0 5px';
				pageButton.style.padding = '8px 12px';
				pageButton.style.border = '1px solid #aaa';
				pageButton.style.borderRadius = '4px';
				pageButton.style.cursor = 'pointer';
				pageButton.style.background = '#f4f4f4';
				pageButton.addEventListener('click', () => showPage(i, filteredItems));
				paginationContainer.appendChild(pageButton);
			}
		}

		document.querySelector('#certificates-gallery').appendChild(paginationContainer);
		showPage(1, filteredItems); // Show the first page by default
	}

	function filterAndPaginate() {
		const searchTerm = searchInput.value.trim().toLowerCase();
		const activeCategory = Array.from(categoryButtons).find(button => button.classList.contains('active'))?.dataset.category || 'all';

		const filteredItems = Array.from(items).filter(item => {
			const itemCats = item.getAttribute('data-category').split(' ');
			const text = item.textContent.toLowerCase();
			const matchesCategory = activeCategory === 'all' || itemCats.includes(activeCategory);
			const matchesSearch = text.includes(searchTerm);
			return matchesCategory && matchesSearch;
		});

		updatePagination(filteredItems);
	}

	categoryButtons.forEach(button => {
		button.addEventListener('click', () => {
			categoryButtons.forEach(btn => btn.classList.remove('active'));
			button.classList.add('active');
			filterAndPaginate();
		});
	});

	searchInput.addEventListener('input', filterAndPaginate);

	filterAndPaginate(); // Initial setup
	const filteredItems = Array.from(items).filter(item => item.style.display !== 'none');
	showPage(1, filteredItems); // Ensure the first page is displayed initially
}

addPagination();

function filterItemsByTags() {
	const searchTerm = searchInput.value.trim().toLowerCase();
	const filteredItems = Array.from(items).filter(item => {
		const tags = Array.from(item.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
		return searchTerm === '' || tags.includes(searchTerm);
	});

	const paginationContainer = document.querySelector('.pagination');
	if (paginationContainer) {
		paginationContainer.innerHTML = ''; // Clear existing pagination
		const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

		function showPage(page) {
			items.forEach(item => item.style.display = 'none'); // Hide all items
			filteredItems.forEach((item, index) => {
				item.style.display = index >= (page - 1) * itemsPerPage && index < page * itemsPerPage ? 'block' : 'none';
			});
		}

		if (totalPages > 1) {
			for (let i = 1; i <= totalPages; i++) {
				const pageButton = document.createElement('button');
				pageButton.textContent = i;
				pageButton.className = 'page-btn';
				pageButton.style.margin = '0 5px';
				pageButton.style.padding = '8px 12px';
				pageButton.style.border = '1px solid #aaa';
				pageButton.style.borderRadius = '4px';
				pageButton.style.cursor = 'pointer';
				pageButton.style.background = '#f4f4f4';
				pageButton.addEventListener('click', () => showPage(i));
				paginationContainer.appendChild(pageButton);
			}
		}

		showPage(1); // Show the first page by default
	}
}

searchInput.addEventListener('input', filterItemsByTags);
