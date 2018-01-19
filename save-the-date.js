$(document).ready(function(){
    
    /**
     * @summary Font object constructor
     * @param {string} name The css font-face font-family
     * @param {number} max_size The maximum size the font can be
    */
    function Font(name, max_size) {
        this.name = name
        this.max_size = max_size
    }

    
    // Create an array of Font objects
    const FONTS = [
        new Font('anisha', 34),
        new Font('behindScript', 34),
        new Font('bolina', 34),
        new Font('freebooterScript', 24),
        new Font('hugsAndKisses', ),
        new Font('mfWeddingBells', ),
        new Font('mirellaScript', ),
        new Font('qaskinBlack', ),
        new Font('respective', ),
        new Font('theHeartOfEverything', ),
        new Font('youreInvitedHeavy', )
    ]

    // Create an array of paper file names
    const OPTIONS = {
        text_paper: [
            'white_linen',
            'cream_linen',
            'gray_linen',
            'white_felt'
        ],
        cardstock: [
            'silver_metallic_light',
            'silver_metallic_dark'
        ],
        accent_paper: [
            'silver_rose',
            'silver_swirl',
            'silver_pebble'
        ],
        buckle: [
            'heart',
            'circle',
            'diamond'
        ]
    }


    /**
     * Loop through arrays to show design options on screen
     */
    FONTS.forEach(font => {      
        $('#select-font').append('<option>' + font.name + '</option>')
        // $('#select-font').append('<option style="font-family:' + font.name + ';">' + 'Bride & Groom' + '</option>')
        // console.log('Font Name: ' + font.name + ' Max Size: ' + font.max_size)
    })
    
    OPTIONS.text_paper.forEach(paper => {      
        $('#select-text-paper').append('<input type="radio" name="selected-text-paper" value ="' + paper + '"/>' +
        paper + '<div class="image-block" ><label for="' + paper + '"><img src="text-paper/' + paper + '.jpg" alt ="' + paper + '" class = "preview-image"/></label></div>')
    })
    
    OPTIONS.cardstock.forEach(paper => {      
        $('#select-cardstock').append('<input type="radio" name="selected-cardstock" value ="' + paper + '"/>' +
        paper + '<div class="image-block" ><img src="cardstock/' + paper + '.jpg" alt ="' + paper + '"  class = "preview-image"/></div>')
    })
    
    OPTIONS.accent_paper.forEach(paper => {      
        $('#select-accent-paper').append('<input type="radio" name="selected-accent-paper" value ="' + paper + '"/>' +
        paper + ' <div class="image-block" ><img src="accent-paper/' + paper + '.jpg" alt ="' + paper + '"  class = "preview-image"/></div>')
    })    
    
    OPTIONS.buckle.forEach(buckle => {      
        $('#select-buckle').append('<input type="radio" name ="selected-buckle" value ="' + buckle + '"/>' +
    buckle + '<div class="image-block" ><img src="buckles/' + buckle + '.png" alt ="' + buckle + '" height="50px"/></div>')
    })
    

    /**
     * Handles user changes to form by updating view
     */
    $('#select-font').on('change', () => {
        let fontSelected = getSelectedFont();

        // let optionSelected = $('option:selected', this);

        // let valueSelected = optionSelected.val();
        // console.log('Value Selected: ' + valueSelected);
        
        $('#names, #header').css('font-family', fontSelected)
    })    

    // + button clicked to increase font size
    $('#font-increase-button').click(() => {
        let fontSize = parseInt($('#names, #header').css("font-size"))
        if (fontSize < $())
        fontSize = fontSize + 1 + 'px'
        $('#names, #header').css({'font-size':fontSize})
        console.log('Font Size Up To: ' + fontSize)
    })  

    // - button clicked to increase font size
    $('#font-decrease-button').click(() => {
        let fontSize = parseInt($('#names, #header').css("font-size"))
        fontSize = fontSize - 1 + 'px'
        $('#names, #header').css({'font-size':fontSize})
        console.log('Font Size Down To: ' + fontSize)
    })

    // radio button clicked to change text paper
    $('input[name=selected-text-paper]').on('change', () => {
        let paperSelected = $('input[name=selected-text-paper]:checked').val()
        $('#content').css('background-image', 'url(text-paper/' + paperSelected + '.jpg)')
    })

    // radio button clicked to change cardstock paper
    $('input[name=selected-cardstock]').on('change', () => {
        let paperSelected = $('input[name=selected-cardstock]:checked').val()
        $('#card').css('background-image', 'url(cardstock/' + paperSelected + '.jpg)')
    })

    // radio button clicked to change accent paper
    $('input[name=selected-accent-paper]').on('change', () => {
        let paperSelected = $('input[name=selected-accent-paper]:checked').val()
        $('#accent-paper').css('background-image', 'url(accent-paper/' + paperSelected + '.jpg)')
    })

    // radio button clicked to change buckle embellishment
    $('input[name=selected-buckle]').on('change', () => {
        let buckleSelected = $('input[name=selected-buckle]:checked').val()
        $('#buckle').attr('src', 'buckles/' + buckleSelected + '.png')
    })


    /**
     * Other Functions
     */
    getSelectedFont = () => {
        return $('#select-font').find(':selected').val()
    }

});