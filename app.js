// Tab switching
document.querySelectorAll('.sidebar-menu li').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      if (target) {
        document.getElementById(target).classList.remove('hidden');
      }
    });
});

// Main initialization function
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(li => li.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show corresponding tab content
            const tabId = this.getAttribute('data-tab');
            if (tabId) {
                document.getElementById(tabId).classList.remove('hidden');
            }
            
            // Handle logout
            if(this.textContent.includes('Logout')) {
                console.log('Logout clicked');
            }
        });
    });
    
    // Initialize Charts
    if(document.getElementById('gradesChart')) {
        initializeCharts();
    }

    // View All Homework Button
    const viewAllBtn = document.getElementById('viewAllHomeworkBtn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            
            // Show homework tab
            document.getElementById('homework').classList.remove('hidden');
            
            // Update active state in sidebar
            document.querySelectorAll('.sidebar-menu li').forEach(li => {
                li.classList.remove('active');
                if (li.getAttribute('data-tab') === 'homework') {
                    li.classList.add('active');
                }
            });
        });
    }
});

function initializeCharts() {
    // Grades Chart
    const gradesCtx = document.getElementById('gradesChart').getContext('2d');
    new Chart(gradesCtx, {
        type: 'bar',
        data: {
            labels: ['Math', 'Physics', 'Chemistry', 'English'],
            datasets: [{
                label: 'Average Score',
                data: [90, 86, 83, 89],
                backgroundColor: [
                    'rgba(68, 98, 74, 0.7)',
                    'rgba(139, 168, 136, 0.7)',
                    'rgba(192, 207, 178, 0.7)',
                    'rgba(241, 235, 225, 0.7)'
                ],
                borderColor: [
                    'rgba(68, 98, 74, 1)',
                    'rgba(139, 168, 136, 1)',
                    'rgba(192, 207, 178, 1)',
                    'rgba(241, 235, 225, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
    
    // Study Time Chart
    const studyTimeCtx = document.getElementById('studyTimeChart').getContext('2d');
    new Chart(studyTimeCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Study Time (hours)',
                data: [2, 1.5, 2.5, 1, 3, 2, 0],
                backgroundColor: 'rgba(139, 168, 136, 0.2)',
                borderColor: 'rgba(68, 98, 74, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Homework Completion Chart
    const homeworkCtx = document.getElementById('homeworkChart').getContext('2d');
    new Chart(homeworkCtx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Pending'],
            datasets: [{
                data: [92, 8],
                backgroundColor: [
                    'rgba(68, 98, 74, 0.7)',
                    'rgba(192, 207, 178, 0.7)'
                ],
                borderColor: [
                    'rgba(68, 98, 74, 1)',
                    'rgba(192, 207, 178, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            cutout: '70%'
        }
    });
}