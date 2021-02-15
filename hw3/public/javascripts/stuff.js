
        var toppings = document.getElementById('quantityTopping')
        var quantity;
        var Notes;
    $(document).ready(function() {

        checkRadio();

        $('#Order').on('click', function() {
            
        var usersTopping = $('input[name="flavor"]:checked').attr("id");
        var usersQuantity = $('#numOfCheesecakes option:selected').val();
        var usersNotes = $('#notes').val();
       
        if (usersQuantity == 1) {
                        $('#thankYouMessage').html('Thank you!  Your order has been placed. <br />' + "<ul> <li>"
                        + usersQuantity + " " + usersTopping + " cheesecake </li> <li> Order Details: " +
                        usersNotes + "</li>");
                    }
                    else {
                        $('#thankYouMessage').html('Thank you!  Your order has been placed. <br />' + "<ul> <li>"
                        + usersQuantity + " " + usersTopping + " cheesecakes </li> <li> Order Details: " + 
                        usersNotes + "</li>");
                    }

                validate();
                clearScreen();
        });

    });

    function checkRadio() {
        $('#Plain').on('click', function() {
            toppings = 'Plain'
        });
        $('#Cherry').on('click', function() {
            toppings = 'Cherry'
            
        });
        $('#Chocolate').on('click', function() {
            toppings = 'Chocolate'
            
        });
    }

    function checkRadio() {
        $('#1').on('click', function() {
            quantity = '1'
        });
        $('#2').on('click', function() {
            quantity = '2'
        });
        $('#3').on('click', function() {
            quantity = '3'
        });
        $('#4').on('click', function() {
            quantity = '4'
        });
        $('#5').on('click', function() {
            quantity = '5'
        });
        $('#6').on('click', function() {
            quantity = '6'
        });
        $('#7').on('click', function() {
            quantity = '7'
        });
        $('#8').on('click', function() {
            quantity = '8'
        });
        $('#9').on('click', function() {
            quantity = '9'
        });
        $('#10').on('click', function() {
            quantity = '10'
        });
    }

    function thankYou() {
        var order = document.getElementById('Order');
        $('#Order').html('Thank you!');
        return;
    }

    function checkString(str) {
        var n = str.includes("vegan");
        if(n) {
            alert('The cheesecakes contain dairy');
            location.reload();
            return;
        } else {
            return;
        }
        return;
    }

    function trimfield(str) 
    { 
        return str.replace(/^\s+|\s+$/g,''); 
    }

    function validate()
    {
        Notes = document.getElementById('notes');
            if(trimfield(Notes.value) == '') {  
                alert('Enter a note')
                return false;
            } else {
                checkString(Notes.value)
                thankYou()
                return false;
            }
            return false;
    }

        function clearScreen() {
            document.getElementById("form").style.display="none";   
            return;
        }

        function printScreen() {
            var res = String(quantity) + "<br>" + String(toppings);
            document.getElementById("demo").innerHTML = res
            
            return;
        }


        $('#Jan').on('click', function() {
            $('#first').html('Jan');
        });

        $('#Feb').on('click', function() {
            $('#first').html('Feb');
        });

        $('#Mar').on('click', function() {
            $('#first').html('Mar');
        });

        $('#Apr').on('click', function() {
            $('#first').html('Apr');
        });

        $('#May').on('click', function() {
            $('#first').html('May');
        });

        $('#Jun').on('click', function() {
            $('#first').html('Jun');
        });

        $('#Jul').on('click', function() {
            $('#first').html('Jul');
        });

        $('#Aug').on('click', function() {
            $('#first').html('Aug');
        });

        $('#Sep').on('click', function() {
            $('#first').html('Sep');
        });

        $('#Oct').on('click', function() {
            $('#first').html('Oct');
        });

        $('#Nov').on('click', function() {
            $('#first').html('Nov');
        });

        $('#Dec').on('click', function() {
            $('#first').html('Dec');
        });
