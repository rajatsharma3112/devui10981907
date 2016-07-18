describe('My Application', function () {
    var scope,
    controller,
    location;
    beforeEach(function () {
        module('myappApp');
    });

    describe('Results controller', function () {
        beforeEach(inject(function ($rootScope, $controller,$location) {
            scope = $rootScope.$new();
            location = $location;
            spyOn(location, 'path').and.returnValue('/');
            controller = $controller('ResultCtrl', {
                '$scope': scope,
                '$location': location
            });
        }));

        it('sets the application title', function () {
            expect(scope.apptitle).toBe('Java Case study - Hotel Booking Application');
        });

        it('sets the page title', function () {
            expect(scope.pagetitle).toBe('Hotel Results');
        });

        it('should have property for text to be searched ', function () {
            expect(scope.searchText).toBeDefined();
        });

        it('should have property for maximum results', function () {
            expect(scope.MaximumResult).toBeDefined();
        });

        it('function change result should change path', function () {
        	scope.changeResults();
            expect(location.path).toHaveBeenCalledWith('/search');
        });

        it('function view hotelsshould change path', function () {
        	scope.viewHotels(10);
            expect(location.path).toHaveBeenCalledWith('/view/10');
        });


    });
});
