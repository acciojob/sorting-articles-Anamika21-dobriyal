//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        function sortBands(bands) {
            return bands.sort((a, b) => {
                const removeWords = (str) => str.replace(/\b(a|an|the)\b/gi, '').trim();
                return removeWords(a).localeCompare(removeWords(b));
            });
        }

        const sortedBands = sortBands(bands);
        const bandList = document.getElementById('bands');

        sortedBands.forEach(band => {
            const li = document.createElement('li');
            li.textContent = band;
            bandList.appendChild(li);
        });